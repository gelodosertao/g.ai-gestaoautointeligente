import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Smartphone, ShieldCheck, Zap, Database, BarChart3, Users, MessageSquare } from 'lucide-react';

const VisitorLanding: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-dvh w-full bg-gai-navy text-white font-sans overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative min-h-dvh flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gai-teal/10 blur-[120px] rounded-full z-0"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-5xl">
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
                            <img src="/logo.png" alt="G.AI Logo" className="h-40 md:h-56 w-auto object-contain drop-shadow-[0_0_30px_rgba(61,191,176,0.4)]" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight">
                            A Inteligência que <span className="text-gai-teal">Gela</span> seu Negócio
                        </h1>
                        <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                            A plataforma definitiva para geleiros saírem do analógico. Gestão de produção, PDV, estoque e financeiro em um só lugar.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-4">
                        <button
                            onClick={() => navigate('/login')}
                            className="group relative px-10 py-5 bg-gai-teal hover:bg-gai-teal-light text-gai-navy rounded-2xl font-black text-xl transition-all duration-300 shadow-xl shadow-teal-900/40 hover:scale-105 flex items-center gap-3 overflow-hidden"
                        >
                            Começar Agora
                            <Zap className="fill-gai-navy" size={20} />
                        </button>
                        <button
                            onClick={() => navigate('/cardapio-adega')}
                            className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-xl transition-all duration-300"
                        >
                            Ver Demonstração
                        </button>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="py-32 px-4 relative bg-slate-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black">Tudo o que sua fábrica precisa</h2>
                        <p className="text-slate-400 text-xl">Desenvolvido por quem entende o dia a dia de um geleiro.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Controle de Produção', desc: 'Monitore cada quilo de gelo produzido, turnos e produtividade.', icon: Zap },
                            { title: 'PDV e Vendas', desc: 'Sistemas rápidos para varejo e atacado com emissão de recibos.', icon: Smartphone },
                            { title: 'Estoque Inteligente', desc: 'Avisos de estoque baixo e gestão de múltiplos depósitos.', icon: Database },
                            { title: 'Financeiro Real-Time', desc: 'DRE, fluxo de caixa e fechamento de caixa automatizado.', icon: BarChart3 },
                            { title: 'Gestão de Clientes', desc: 'CRM integrado para fidelizar seus maiores compradores.', icon: Users },
                            { title: 'Pedidos Online', desc: 'Seu próprio site de pedidos para delivery e auto-atendimento.', icon: LayoutDashboard },
                            { title: 'AI Assistant', desc: 'Inteligência Artificial para analisar seus lucros e dar sugestões.', icon: MessageSquare },
                            { title: 'Segurança Total', desc: 'Dados protegidos com criptografia de ponta e RLS.', icon: ShieldCheck },
                        ].map((f, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-gai-teal/5 hover:border-gai-teal/30 transition-all group">
                                <div className="bg-gai-teal/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <f.icon className="text-gai-teal" size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FOOTER */}
            <footer className="py-32 px-4 text-center space-y-12">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-4xl md:text-6xl font-black">Pronto para o próximo nível?</h2>
                    <p className="text-slate-400 text-xl">Junte-se aos geleiros que já automatizaram seus negócios com G.AI.</p>
                </div>
                
                <div className="flex justify-center">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-12 py-6 bg-gai-teal text-gai-navy rounded-[2rem] font-black text-2xl hover:scale-110 transition-transform shadow-2xl shadow-teal-500/20"
                    >
                        Falar com Consultor
                    </button>
                </div>

                <div className="pt-20 opacity-50 flex flex-col items-center gap-4">
                    <img src="/logo.png" alt="G.AI Logo" className="h-12 w-auto grayscale" />
                    <p className="text-sm">© {new Date().getFullYear()} G.AI - Gestão Auto Inteligente. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default VisitorLanding;
