<style>
    body 
    {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            background: linear-gradient(135deg, #1e1e2f, #3a3a52);
            color: white;
    }
    header
    {
            background: #222;
            padding: 1rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        section {
            padding: 50px 20px;
            max-width: 800px;
            margin: auto;
        }
        .animated-box {
            width: 100px;
            height: 100px;
            background: #ff5722;
            margin: 20px auto;
            transform: rotateX(0deg) rotateY(0deg);
            animation: rotate3D 5s infinite linear;
        }
        @keyframes rotate3D {
            0% { transform: rotateX(0deg) rotateY(0deg); }
            50% { transform: rotateX(180deg) rotateY(180deg); }
            100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        form input, form textarea, form button {
            display: block;
            width: 100%;
            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
            border: none;
        }
        form button {
            background: #ff5722;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: transform 0.3s;
        }
        form button:hover {
            transform: scale(1.05);
        }
        footer {
            background: #222;
            padding: 10px;
            position: absolute;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <h1>Ankit Raj</h1>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="about">
        <h2>About Me</h2>
        <div class="animated-box" id="animatedBox"></div>
        <p>I am a 4th-semester Computer Science student at Punjab Technical University, passionate about web development and programming.</p>
    </section>
    
    <section id="skills">
        <h2>Skills</h2>
        <p>HTML | CSS | JavaScript | C++ | C | Python</p>
    </section>
    
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li><strong>To-Do List App</strong> - A simple task manager [GitHub Link]</li>
            <li><strong>Weather App</strong> - Fetches live weather data [GitHub Link]</li>
        </ul>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>
    
    <footer>
        <p>© 2025 Ankit Raj | All Rights Reserved</p>
    </footer>
    
    <script>
        document.getElementById("contactForm").addEventListener("submit", function(event)) 
        {
            event.preventDefault():
            let fullname = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            if (name && email && message) {
                alert("Thank you, " + fullname + "! Your message has been sent.");
                document.getElementById("contactForm").reset();
            } else {
                alert("Please fill all fields!");
            }
        };

        // 3D Box Rotation Effect on Click
        document.getElementById("animatedBox").addEventListener("click", function() {
            this.style.animation = "none";
            setTimeout(() => {
                this.style.animation = "rotate3D 5s infinite linear";
            }, 10);
        });
    </script>
</body>
</html>

