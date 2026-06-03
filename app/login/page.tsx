'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabaseClient'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)
    if (authError) {
      setError('Credenciales incorrectas. Verificá tu email y contraseña.')
      return
    }
    router.push('/aviso')
  }
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#0B1E35' }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#7A8FA6 1px, transparent 1px), linear-gradient(90deg, #7A8FA6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative w-full max-w-sm px-8 py-12 mx-4">
        <div className="mb-12 text-center">
          <span
            className="text-3xl font-bold tracking-[0.25em] text-white"
            style={{ fontFamily: 'Calibri, Georgia, serif' }}
          >
            CORE
          </span>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
          <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-[#4A6080]">
            Biblioteca Interna
          </p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <Input
            label="Email"
            type="email"
            placeholder="usuario@core.lat"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <Input
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {error && (
            <p className="text-xs text-red-400 text-center tracking-wide">
              {error}
            </p>
          )}
          <div className="mt-2">
            <Button type="submit" loading={loading}>
              Ingresar
            </Button>
          </div>
        </form>
        <p className="mt-10 text-center text-[10px] tracking-widest uppercase text-[#2E4060]">
          Acceso restringido · Solo personal autorizado
        </p>
      </div>
    </main>
  )
}
