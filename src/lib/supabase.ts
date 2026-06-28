import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tptqbeyaijnyoenluxsq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ppINfHBQsrUwgouw-INJJQ_6OAIentn";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
