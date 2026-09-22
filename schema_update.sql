-- Agregar esto al final de tu archivo schema.sql si ya corriste el anterior

CREATE TABLE IF NOT EXISTS commitments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  message text NOT NULL,
  approved boolean DEFAULT true
);

CREATE TABLE IF NOT EXISTS challenges (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  points integer DEFAULT 10,
  is_active boolean DEFAULT true
);

ALTER TABLE commitments ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON commitments FOR SELECT USING (approved = true);
CREATE POLICY "Allow public insert" ON commitments FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read" ON challenges FOR SELECT USING (true);
