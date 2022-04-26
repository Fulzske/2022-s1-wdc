USE wdcoverflow;

CREATE TABLE users (
    id INT,
    username VARCHAR(63),
    email VARCHAR(127),
    password VARCHAR(255),
    phone CHAR(12),
    last_login DATETIME,
    login_ip CHAR(15),
    PRIMARY KEY (id)
);

CREATE TABLE posts (
    id INT,
    user INT,
    title VARCHAR(255),
    content TEXT,
    timestamp DATETIME,
    views INT,
    PRIMARY KEY (id)
);