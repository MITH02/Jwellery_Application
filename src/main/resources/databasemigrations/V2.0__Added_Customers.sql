CREATE TABLE customers (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	name VARCHAR(100) NOT NULL,
	phone VARCHAR(20) UNIQUE NOT NULL,
	address TEXT,
	photo_url VARCHAR(255),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



select * from customers;
