const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(express.json());

// --- SQL SERVER CONFIGURATION ---

const dbConfig = {
    user: 'sa', // Your SQL username (usually 'sa')
    password: 'Aamina!989', // Your actual SQL password
    server: 'localhost', 
    database: 'NobleAcademy', // The database name in SSMS
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// --- ROUTES ---

// 1. Registration Route
app.post('/api/register', async (req, res) => {
    try {
        const { loginId, password, name, contactNo, collegeName, group, sClass } = req.body;
        let pool = await sql.connect(dbConfig);
        
        await pool.request()
            .input('loginId', sql.VarChar, loginId)
            .input('password', sql.VarChar, password)
            .input('name', sql.VarChar, name)
            .input('contact', sql.VarChar, contactNo)
            .input('college', sql.VarChar, collegeName)
            .input('group', sql.VarChar, group)
            .input('class', sql.VarChar, sClass)
            .query(`INSERT INTO students (LoginID, Password, Name, ContactNo, CollegeName, StudentGroup, StudentClass) 
                    VALUES (@loginId, @password, @name, @contact, @college, @group, @class)`);

        res.status(201).json({ message: "Student record created successfully" });
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ message: "Database Error: Student ID might already exist" });
    }
});

// 2. Login Route
// --- UPDATED LOGIN LOGIC ---
app.post('/api/login', async (req, res) => {
    try {
        const { loginId, password } = req.body; 
        let pool = await sql.connect(dbConfig);
        
        // This line is key: it now looks for 'LoginID' instead of 'Email'
        let result = await pool.request()
            .input('loginId', sql.VarChar, loginId)
            .input('password', sql.VarChar, password)
            .query('SELECT * FROM students WHERE LoginID = @loginId AND Password = @password');

        if (result.recordset.length > 0) {
            const user = result.recordset[0];
            res.json({ 
                success: true,
                user: { name: user.Name, loginId: user.LoginID },
                profile: { 
                    group: user.StudentGroup, // Returns MPC or BiPC
                    college: user.CollegeName,
                    sclass: user.StudentClass
                } 
            });
        } else {
            res.status(401).json({ message: "Invalid ID or Password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

// --- GET QUESTIONS BY SERIES ---
app.get('/api/questions/:series', async (req, res) => {
    try {
        const seriesName = req.params.series; 
        let pool = await sql.connect(dbConfig);
        let result = await pool.request()
            .input('series', sql.NVarChar, seriesName)
            .query('SELECT * FROM ExamQuestions WHERE mockSeries = @series');
        
        res.json(result.recordset); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});