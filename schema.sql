-- Schema para EcoShine MVP
-- Ejecutar en el SQL Editor de Supabase

CREATE TABLE news (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  date date NOT NULL,
  image_url text
);

CREATE TABLE gallery (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text
);

CREATE TABLE indicators (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  value numeric DEFAULT 0,
  unit text,
  description text
);

CREATE TABLE activities (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  date date NOT NULL,
  description text,
  type text,
  image_url text
);

CREATE TABLE educational_content (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  summary text,
  body text,
  video_url text
);

-- Tabla para Únete a la iniciativa
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  type text NOT NULL, -- Ej: persona, institucion, empresa, arquitecto
  contact_info text NOT NULL, -- Email o teléfono
  message text
);

-- Optional: Enable RLS and setup basic policies 
-- We can set them all to be publicly readable, but only leads are publicly insertable. 
-- Assuming standard public access to read all tables for MVP.
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE indicators ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE educational_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow public read
CREATE POLICY "Allow public read" ON news FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON gallery FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON indicators FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON activities FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON educational_content FOR SELECT USING (true);

-- Allow public insert to leads
CREATE POLICY "Allow public insert" ON leads FOR INSERT WITH CHECK (true);

-- (Nota: Para un entorno real, las inserciones/actualizaciones/eliminados en otras tablas deben quedar limitadas a roles autenticados)
