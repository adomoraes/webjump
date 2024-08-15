import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
	"https://zknagtuphkevtklklvng.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprbmFndHVwaGtldnRrbGtsdm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NDY0MzMsImV4cCI6MjAzOTIyMjQzM30.dl7u5TCBpBM0QiPQlsbS22LNDoqGz-8bKh9E0g0dRJ8"
)

const testConnection = async () => {
	try {
		let { data, error } = await supabase.from("categories").select("*")

		if (error) throw error
	} catch (error) {
		console.error("Erro ao conectar-se ao Supabase:", error.message)
	}
}

testConnection()
