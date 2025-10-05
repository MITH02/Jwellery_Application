-- V1.0__Added_login.sql
-- Phase 1: Authentication & Roles

-- Create users table
CREATE TABLE IF NOT EXISTS users (
	id BIGSERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	role VARCHAR(10) NOT NULL CHECK (role IN ('ADMIN','STAFF')),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

-- Trigger to auto-update updated_at on row update
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_users_updated_at
	BEFORE UPDATE ON users
	FOR EACH ROW
	EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user
-- Password: "admin123" hashed using BCrypt
-- Example hash: $2a$10$Dow1p0jHT3u5kGxF1fHt0e7p8x8WdpVV0dLw4W1YtYgPXiXQj0o4a
INSERT INTO users (username, password, role)
VALUES ('admin', '$2a$10$Dow1p0jHT3u5kGxF1fHt0e7p8x8WdpVV0dLw4W1YtYgPXiXQj0o4a', 'ADMIN');

-- Optional: JWT blacklist table (for future token revocation)
CREATE TABLE IF NOT EXISTS jwt_blacklist (
	id BIGSERIAL PRIMARY KEY,
	token TEXT NOT NULL,
	expired_at TIMESTAMP NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
