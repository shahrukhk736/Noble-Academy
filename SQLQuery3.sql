-- 1. Wipe the old structure
IF OBJECT_ID('dbo.ExamQuestions', 'U') IS NOT NULL DROP TABLE dbo.ExamQuestions;
GO

-- 2. Create the clean table with "CamelCase" names
CREATE TABLE ExamQuestions (
    id INT PRIMARY KEY IDENTITY(1,1),
    Subject NVARCHAR(50),
    QuestionText NVARCHAR(MAX),
    OptionA NVARCHAR(MAX),
    OptionB NVARCHAR(MAX),
    OptionC NVARCHAR(MAX),
    OptionD NVARCHAR(MAX),
    CorrectIndex INT,
    mockSeries NVARCHAR(100)
);
GO

INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If A={1,2,3,4} and B={3,4,5,6}, then the symmetric difference AΔB is:','{3,4}','{1,2,5,6}','{1,2}','{1,2,3,4,5,6}','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If f(x)=2x+3 and g(x)=x2, then the composite function f(g(x)) is:','(2x+3)2','x2+2x+3','2x2+3','2x+32','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The number of one-to-one functions from a set with 3 elements to a set with 5 elements is:','15','10','125','60','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If ω is a complex cube root of unity, then 1+ω+ω2 equals:','1','0','ω','-1','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The modulus of the complex number z=3+4i is:','7','25','5','1','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If z=1+i, then the argument arg(z) in degrees is:','45∘','30∘','60∘','90∘','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The roots of the quadratic equation x2−5x+6=0 are:','1, 6','-2, -3','2, 3','-1, -6','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If α and β are the roots of ax2+bx+c=0, then α+β is:','c/a','−b/a','b/a','−c/a','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of k for which the roots of x2−4x+k=0 are equal is:','2','16','0','4','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The maximum value of the quadratic expression 3+2x−x2 is:','4','5','3','2','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If A is a 3×3 matrix and $','A','#ERROR!','2A','$ is:','10');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','A square matrix A is called singular if its determinant $','A','$ is:','1','-1','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If A=[1324], then the transpose AT is:','[1234]','[1324]','[4321]','[2413]','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The number of terms in the expansion of (x+a)10 is:','10','11','20','9','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The middle term in the expansion of (x+1/x)10 is:','1','10C4','10C5','10C6','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The sum of the coefficients in the expansion of (1+x)n is:','n','2n','2n','n2','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The number of ways to arrange the letters of the word "MATH" is:','24','4','12','48','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of nCr+nCr−1 is:','nCr+1','n+1Cr','nCr','n+1Cr−1','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The number of diagonals in a decagon (10-sided polygon) is:','45','35','10','20','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If (x−1)(x−2)3x+2=x−1A+x−2B, then the value of A is:','5','8','-5','-8','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The period of the function f(x)=tan(x/3) is:','?','3?','?/3','2?','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of cos1?cos2?cos3?�cos179? is:','1','-1','0','01-Feb','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If sin?+cos?=2?, then the value of ? is:','30?','60?','90?','45?','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of tan75? is:','2?3?','2+3?','3??1','1','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','sin(180???) is equal to:','sin?','?sin?','cos?','?cos?','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of sin18? is:','45??1?','45?+1?','410+25???','410?25???','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If tanA=1/2 and tanB=1/3, then A+B is:','30?','60?','45?','90?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of sin220?+sin270? is:','0','2','01-Feb','1','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The maximum value of 3sinx+4cosx is:','7','5','1','25','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','cos(2?) in terms of tan? is:','1+tan2?1?tan2??','1?tan2?2tan??','1+tan2?2tan??','1?tan2?1+tan2??','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The principal value of sin?1(?1/2) is:','?/6','??/6','5?/6','??/3','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','tan?1x+cot?1x is equal to:','?','0','?/2','2?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of cos(cos?123??+6??) is:','01-Feb','0','3?/2','1','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','In a triangle ABC, a=2,b=3,c=4. The value of cosA is:','Nov-16','07-Aug','01-Apr','05-Aug','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','In any triangle ABC, sinAa?=sinBb?=sinCc? is known as:','Cosine Rule','Tangent Rule','Sine Rule','Projection Rule','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The area of a triangle with sides a,b and included angle C is:','absinC','21?absinC','21?abcosC','abcosC','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If r is the in-radius and s is the semi-perimeter, then area ? is:','s/r','r/s','r2s','rs','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of sin225? is:','1/2?','?1/2?','3?/2','?3?/2','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of 2sin15?cos15? is:','01-Feb','3?/2','1','1/2?','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If sec2?=4/3, then the general solution for ? is:','n?�?/3','n?�?/6','2n?�?/6','n?+?/6','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If tanA=21? and tanB=31?, then the value of A+B is:','30?','45?','60?','90?','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The maximum value of 5sinx+12cosx is:','17','7','13','12','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of 2sin15?cos15? is:','21?','23??','1','2?1?','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The general solution of sinx=0 is:','x=n?','x=2n?','x=2n??','x=(2n+1)?','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If in a triangle ABC, a=3,b=4,c=5, then cosC is:','1','21?','0','54?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The principal value of cos?1(?1/2) is:','3??','32??','?3??','34??','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If sec2?+tan2?=7, then the value of ? in the first quadrant is:','30?','45?','60?','75?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of cot15? is:','2+3?','2?3?','3??1','3?+1','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','In a triangle ABC, (b+c)cosA+(c+a)cosB+(a+b)cosC equals:','0','a+b+c','2s','abc','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The value of sin18? is:','45?+1?','410+25???','45??1?','410?25???','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','tan(A+B) is equal to:','1?tanAtanBtanA+tanB?','1+tanAtanBtanA?tanB?','tanA+tanB1?tanAtanB?','tanA+tanB','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The period of f(x)=sin2x is:','2?','2??','?','4?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If a=2i^+j^??k^ and b=i^+3k^, then a?b is:','-1','5','2','0','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The unit vector in the direction of a=i^+j^?+k^ is:','i^+j^?+k^','3?i^+j^?+k^?','3i^+j^?+k^?','2?i^+j^?+k^?','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The area of a parallelogram whose adjacent sides are a and b is:','$','\vec{a} \cdot \vec{b}','$','$\frac{1}{2}','');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If a and b are perpendicular, then a?b is:','1','0','-1','$','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The projection of a on b is given by:','$\frac{\vec{a} \cdot \vec{b}}{','\vec{b}','}$','$\frac{\vec{a} \cdot \vec{b}}{','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The scalar triple product [abc] represents the volume of a:','Cube','Tetrahedron','Sphere','Parallelopiped','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If $','\vec{a} + \vec{b}','#ERROR!','\vec{a} - \vec{b}','$, then the angle between a and b is:','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','A vector of magnitude 5 in the direction of 3i^?4j^? is:','3i^?4j^?','15i^?20j^?','53i^?4j^??','5i^+5j^?','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If two dice are thrown, the probability of getting a sum of 7 is:','61?','365?','121?','367?','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The probability of an impossible event is:','1','0.5','0','-1','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If P(A)=0.4,P(B)=0.5 and A,B are independent events, then P(A?B) is:','0.9','0.1','0.2','0.45','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The probability of getting at least one head when three coins are tossed is:','81?','83?','87?','21?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','Conditional probability $P(A','B)$ is defined as P(B)P(A?B)?:','P(A)P(A?B)?','P(A)P(B)','P(A)+P(B)','');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','In a Poisson distribution, the Mean is equal to:','Variance','Standard Deviation','0','1','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The sum of probabilities of all elementary events of an experiment is:','0','0.5','1','100','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','If a card is drawn from a pack of 52, the probability it is a King or a Heart is:','5217?','5216?','5213?','524?','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','A box contains 3 red and 7 blue balls. The probability of drawing a red ball is:','0.7','0.3','0.5','0.1','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The mean of a Binomial distribution with parameters n and p is:','npq','np?','np','n+p','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The distance between the points (2,3) and (5,7) is:','4 units','5 units','6 units','7 units','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The slope of a line perpendicular to the line 3x?4y+5=0 is:','03-Apr','?3/4','04-Mar','?4/3','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The center of the circle x2+y2?6x+4y?12=0 is:','(?3,2)','(3,?2)','(6,?4)','(3,2)','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The radius of the circle x2+y2=25 is:','5','25','5?','10','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The equation of the parabola with focus (2,0) and directrix x=?2 is:','y2=4x','y2=8x','x2=8y','y2=?8x','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The length of the latus rectum of the parabola y2=12x is:','3','6','12','24','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The eccentricity of the ellipse 25x2?+16y2?=1 is:','04-May','03-May','Sep-25','05-Mar','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The foci of the hyperbola 16x2??9y2?=1 are:','(�4,0)','(�3,0)','(�5,0)','(0,�5)','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The point (1,2) lies on which side of the line x+y?5=0?','On the line','Origin side','Opposite to origin','At infinity','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('math','The angle between the pair of lines x2?y2=0 is:','0?','45?','90?','180?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Which of the following is a fundamental quantity?','Velocity','Force','Time','Momentum','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The dimensions of Planck''s constant are the same as:','Force','Angular Momentum','Energy','Linear Momentum','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','A car covers half of its journey with speed v1? and the other half with speed v2?. The average speed is:','2v1?+v2??','v1?v2??','v1?+v2?2v1?v2??','v1?+v2?v1?v2??','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The area under a velocity-time graph represents:','Acceleration','Force','Displacement','Momentum','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','A bullet is fired horizontally from a height. Its path will be a:','Circle','Straight line','Parabola','Hyperbola','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','If the net external force on a system is zero, then the total momentum is:','Zero','Constantly increasing','Conserved','Constantly decreasing','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','A body of mass 2�kg is moving with acceleration 5�m/s2. The net force acting on it is:','2.5�N','10�N','7�N','0.4�N','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The coefficient of static friction is always:','Less than kinetic friction','Equal to kinetic friction','Greater than kinetic friction','Zero','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The work done by a conservative force depends only on:','Path taken','Time taken','Initial and final positions','Velocity','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','A spring of constant k is stretched by x. The potential energy stored is:','kx','kx2','21?kx2','21?kx','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The moment of inertia of a ring of mass M and radius R about its central axis is:','MR2','21?MR2','2MR2','41?MR2','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','If the radius of the earth shrinks by 1% (mass remaining same), the value of g:','Increases','Decreases','Remains same','Becomes zero','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The escape velocity of a body from the earth''s surface depends on:','Mass of the body','Radius of the earth','Mass of the sun','Height of the body','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Young''s modulus is a property of:','Gases only','Liquids only','Solids only','All states of matter','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','According to Pascal''s Law, pressure in a fluid at rest is:','Different at all points','Same at all points at same height','Zero','Infinite','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The terminal velocity of a small sphere falling through a viscous liquid is proportional to:','Radius (r)','Square of radius (r2)','Reciprocal of radius (1/r)','Mass of sphere','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The specific heat capacity of water is:','1�cal/g?C','0.5�cal/g?C','2�cal/g?C','4.2�cal/g?C','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','In an adiabatic process, which of the following is zero?','Change in temperature','Work done','Heat exchange','Change in pressure','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The second law of thermodynamics deals with the concept of:','Temperature','Internal Energy','Entropy','Pressure','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','An ideal gas undergoes isothermal expansion. Its internal energy:','Increases','Decreases','Remains constant','Becomes zero','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The velocity of sound is maximum in:','Vacuum','Air','Water','Steel','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','In a simple harmonic motion, the acceleration is proportional to:','Velocity','Time','Displacement','Square of displacement','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Beats are produced by two sound waves of nearly equal:','Amplitudes','Frequencies','Phases','Velocities','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The speed of light in vacuum is approximately:','3�108�m/s','3�106�m/s','3�1010�m/s','3�105�m/s','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','A convex lens acts as a magnifying glass when the object is placed:','At infinity','At 2F','Between F and O','At F','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The phenomenon of total internal reflection occurs when light travels from:','Rare to dense','Dense to rare','Vacuum to air','Water to glass','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Which of the following cannot be polarized?','Light waves','Radio waves','Sound waves','X-rays','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The electric field inside a charged hollow spherical conductor is:','Maximum','Minimum','Zero','Uniform','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Capacitance of a parallel plate capacitor increases with:','Increase in plate area','Increase in distance','Decrease in area','Decrease in dielectric','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Ohm''s law is valid for:','Transistors','Diodes','Metallic conductors','Electrolytes','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Resistance of a wire is 10?. If it is stretched to double its length, new resistance is:','20?','5?','40?','10?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The magnetic field at the center of a circular current loop is:','Zero','2R?0?I?','4?R?0?I?','?0?IR','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Lenz''s Law is a consequence of the law of conservation of:','Charge','Momentum','Energy','Mass','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','An alternating current can be measured by:','Moving coil ammeter','Hot wire ammeter','Tangent galvanometer','None','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Which of the following has the shortest wavelength?','Radio waves','Microwaves','Gamma rays','Visible light','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','Photoelectric effect proves the:','Wave nature of light','Particle nature of light','Dual nature of light','None','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The mass-energy equivalence relation was given by:','Newton','Bohr','Einstein','Planck','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','In a nuclear reactor, moderators are used to:','Increase speed of neutrons','Slow down neutrons','Stop the reaction','Absorb heat','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','A p-type semiconductor is formed by doping Silicon with:','Phosphorus','Arsenic','Boron','Antimony','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('physics','The logic gate that provides a high output only when all inputs are high is:','OR','NOT','AND','NAND','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The number of radial nodes for a 3p orbital is:','1','2','0','3','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following molecules has a square planar geometry?','SF4?','XeF4?','CCl4?','NH3?','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The bond order of O2+? is:','2','1.5','2.5','3','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following is the most electronegative element?','Oxygen','Fluorine','Chlorine','Nitrogen','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','In the periodic table, the element with the highest electron affinity is:','Fluorine','Chlorine','Bromine','Iodine','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The RMS velocity of a gas is proportional to:','T','T?','T2','1/T','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which gas deviates most from ideal behavior at low temperature?','H2?','He','NH3?','N2?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The oxidation state of Cr in K2?Cr2?O7? is:','3','6','7','5','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','For a spontaneous process, the change in Gibbs free energy (?G) must be:','Positive','Zero','Negative','Infinite','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The relationship between Kp? and Kc? is:','Kp?=Kc?(RT)?n','Kc?=Kp?(RT)?n','Kp?=Kc?','Kp?=Kc?/RT','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The pH of 10?8M�HCl is:','8','6','Between 6 and 7','7','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following is a Lewis acid?','NH3?','H2?O','BF3?','OH?','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Hardness of water is due to the presence of salts of:','Na,K','Ca,Mg','Fe,Cu','Ba,Sr','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The most abundant element in the earth''s crust is:','Silicon','Aluminum','Oxygen','Iron','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which alkali metal is the strongest reducing agent in aqueous solution?','Li','Na','K','Cs','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The shape of XeF2? molecule is:','V-shaped','Linear','Trigonal bipyramidal','Bent','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following is known as ''Inorganic Benzene''?','B2?H6?','B3?N3?H6?','B2?O3?','H3?BO3?','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The IUPAC name of CH3??CH(OH)?CH3? is:','Propan-1-ol','Propan-2-ol','Isopropyl alcohol','Propanone','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following shows Geometrical Isomerism?','1-butene','2-butene','Propene','Ethane','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The most stable carbonium ion is:','Primary','Secondary','Tertiary','Methyl','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Benzene reacts with CH3?Cl in presence of anhydrous AlCl3? to give:','Chlorobenzene','Toluene','Ethylbenzene','Xylene','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following is an anti-aromatic compound?','Benzene','Cyclooctatetraene','Pyridine','Naphthalene','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The standard reduction potentials of Zn2+/Zn and Cu2+/Cu are -0.76V and +0.34V. The EMF of the cell is:','0.42V','1.10V','-1.10V','0.34V','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The unit of rate constant for a first-order reaction is:','mol�L?1s?1','L�mol?1s?1','s?1','mol2L?2s?1','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','In a face-centered cubic (FCC) unit cell, the number of atoms per unit cell is:','1','2','4','6','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','An example of a pseudo-first-order reaction is:','Decomposition of N2?O5?','Hydrolysis of cane sugar','Inversion of sucrose','Both B and C','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following solutions will have the highest boiling point?','0.1M�Glucose','0.1M�NaCl','0.1M�CaCl2?','0.1M�FeCl3?','3');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The process of removing impurities from a colloidal solution by means of a membrane is:','Dialysis','Peptization','Coagulation','Tyndall effect','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Froth flotation process is used for the concentration of:','Oxide ores','Carbonate ores','Sulphide ores','Chloride ores','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following noble gases is used in magnetic resonance imaging (MRI)?','He','Ne','Ar','Xe','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The coordination number of Co in [Co(en)3?]3+ is:','3','4','6','2','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following complexes is paramagnetic?','[Ni(CO)4?]','[Ni(CN)4?]2?','[NiCl4?]2?','[Zn(NH3?)4?]2+','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The reaction of an alkyl halide with sodium in dry ether is called:','Wurtz reaction','Fittig reaction','Etard reaction','Kolbe''s reaction','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Phenol reacts with Zn dust to give:','Benzene','Toluene','Benzaldehyde','Zinc phenoxide','0');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following gives Cannizzaro reaction?','CH3?CHO','HCHO','CH3?COCH3?','C2?H5?CHO','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The functional group present in an ester is:','?CHO','?CO?','?COOR','?COOH','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Aniline reacts with NaNO2? and HCl at 0?5?C to form:','Phenol','Benzene','Benzene diazonium chloride','Nitrobenzene','2');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Which of the following is a polyamide?','Terylene','Nylon-6,6','Bakelite','Teflon','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','Deficiency of Vitamin C causes:','Rickets','Scurvy','Beri-beri','Night blindness','1');
INSERT INTO ExamQuestions(Subject,QuestionText,OptionA,OptionB,OptionC,OptionD,CorrectIndex) VALUES ('chemistry','The drug used to reduce fever is called:','Analgesic','Antipyretic','Antibiotic','Antiseptic','1');
-- 4. After inserting data, run this to link all questions to Mock Series #1
UPDATE ExamQuestions SET mockSeries = 'MPC Mock Series #1';
GO