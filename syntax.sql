CREATE TABLE checkout (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    phone VARCHAR,
    address VARCHAR,
    city VARCHAR,
    zip_code VARCHAR,
    country VARCHAR,
    shipping VARCHAR,
    product VARCHAR,
    price INT
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description VARCHAR,
    photo VARCHAR,
    price INT
);

INSERT INTO products

ALTER TABLE checkout ADD price INT DEFAULT 0;