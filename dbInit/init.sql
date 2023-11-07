CREATE DATABASE verceldblocal;

\c verceldblocal;

DROP TABLE IF EXISTS sector;

CREATE TABLE sector (
	id SERIAL PRIMARY key,
	name_serial varchar(255),
	description text
);

DROP TABLE IF EXISTS product;

CREATE TABLE product (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_sector SERIAL REFERENCES sector(id),
    name_product VARCHAR(255),
    image BYTEA,
    price NUMERIC(10, 2),
    description TEXT,
    discount BOOLEAN DEFAULT false 
);
