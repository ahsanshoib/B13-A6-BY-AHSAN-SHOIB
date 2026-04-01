import React, { useState } from 'react';
import productsData from './products.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) setCart([...cart, product]);
  };

  
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      mainIcon: "/assets/user.png",
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      mainIcon: "/assets/package.png",
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      mainIcon: "/assets/rocket.png",
    },
  ];

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact"],
    },
  ];
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const handleCheckout = () => setCart([]);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const getImage = (id) => {
    const images = {
      1: "writing_2327400 1.png",
      2: "design-tool.png",
      3: "group-7.png",
      4: "operation.png",
      5: "portfolio.png",
      6: "social-media.png"
      
      
    };
    return images[id] || "package.png";
  };

  return (
    <div className="bg-white text-slate-800 font-sans">


<nav className="flex justify-between items-center px-6 md:px-20 py-5 sticky top-0 bg-white border-b border-slate-100 z-50">
  
  
  <div className="flex items-center">
    <span className="text-3xl font-bold text-[#7C3AED] tracking-tight">DigiTools</span>
  </div>

  
  <div className="hidden md:flex gap-8 font-medium text-slate-600 text-sm">
    <a href="#" className="hover:text-[#7C3AED] transition">Products</a>
    <a href="#" className="hover:text-[#7C3AED] transition">Features</a>
    <a href="#" className="hover:text-[#7C3AED] transition">Pricing</a>
    <a href="#" className="hover:text-[#7C3AED] transition">Testimonials</a>
    <a href="#" className="hover:text-[#7C3AED] transition">FAQ</a>
  </div>

  
  <div className="flex items-center gap-6">
    
    
    <div 
      className="relative cursor-pointer text-2xl flex items-center" 
      onClick={() => setActiveTab('cart')}
    >
      
      <span>🛒</span>

  
      {cart.length > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
          {cart.length}
        </span>
      )}
    </div>

  
    <button className="font-semibold text-slate-700 hover:text-[#7C3AED] transition">
      Login
    </button>

  
    <button className="bg-linear-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-7 py-2.5 rounded-full font-bold shadow-lg shadow-purple-100 hover:opacity-90 transition">
      Get Started
    </button>

  </div>
</nav>

<header className="px-6 md:px-20 lg:px-32 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
  
  
  <div className="md:w-1/2 space-y-6">
    
    <div className="inline-block text-[#7C3AED] bg-[#F3E8FF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
      ● New: AI-Powered Tools Available
    </div>

  
    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
      Supercharge Your <br /> 
      Digital Workflow
    </h1>

  
    <p className="text-gray-500 text-lg">
      Access premium AI tools, design assets, templates, and productivity 
      software—all in one place. Start creating faster today.
    </p>

  
    <div className="flex flex-wrap items-center gap-4">
    
      <button className="bg-[#7C3AED] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all">
        Explore Products
      </button>
      
    
      <button className="border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3.5 rounded-full font-bold hover:bg-purple-50 transition-all">
        ▷ Watch Demo
      </button>
    </div>
  </div>


  <div className="md:w-1/2">
    <img 
      src="/assets/banner.png" 
      alt="Workflow Banner" 
      className="w-full h-auto w-auto rounded-1xl shadow-sm"
    />
  </div>
</header>

    
      <section className="bg-[#7C3AED] py-10 grid grid-cols-1 md:grid-cols-3 text-center text-white">
        <div>
          <h2 className="text-4xl font-bold">50K+</h2>
          <p>Active Users</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p>Premium Tools</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p>Rating</p>
        </div>
      </section>

   
<section className="py-24 px-6 md:px-20 text-center bg-slate-50">
  <h2 className="text-4xl font-black mb-4 text-slate-900">Premium Digital Tools</h2>
  <p className="text-slate-500 mb-10 max-w-xl mx-auto">
    Choose from our curated tools to supercharge your workflow.
  </p>

  <div className="inline-flex bg-slate-200 p-1 rounded-full mb-12">
    <button
      onClick={() => setActiveTab('products')}
      className={`px-8 py-3 rounded-full font-bold transition-all ${
        activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-slate-600'
      }`}
    >
      Products
    </button>
    <button
      onClick={() => setActiveTab('cart')}
      className={`px-8 py-3 rounded-full font-bold transition-all ${
        activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-slate-600'
      }`}
    >
      Cart ({cart.length})
    </button>
  </div>


  {activeTab === 'products' ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {productsData.map((p) => (
        <div
          key={p.id}
          className="relative border border-slate-100 rounded-[2.5rem] p-8 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
          {/* Badge */}
          {p.badge && (
            <span className="absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-600">
              {p.badge}
            </span>
          )}

          {/* Product Image */}
          <div className="w-16 h-16 mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden">
             <img src={getImage(p.id)} className="w-10 h-10 object-contain" alt={p.name} />
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-2">{p.name}</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            {p.description}
          </p>

          <div className="flex items-baseline mb-6">
            <span className="text-3xl font-black text-slate-900">${p.price}</span>
            <span className="text-slate-400 font-medium ml-1">{p.billing}</span>
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-8 flex-grow">
            {p.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-slate-600 font-medium">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </div>

          <button
            onClick={() => addToCart(p)}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
              cart.find((i) => i.id === p.id)
                ? 'bg-green-100 text-green-600 cursor-default'
                : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9] active:scale-95 shadow-md'
            }`}
          >
            {cart.find((i) => i.id === p.id) ? '✓ Added' : 'Buy Now'}
          </button>
        </div>
      ))}
    </div>
  ) : (
    /* NEW IMPROVED CART SECTION */
    <div className="max-w-4xl mx-auto text-left border border-slate-100 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
      <h3 className="text-3xl font-bold mb-10 text-slate-800">Your Cart</h3>
      
      {cart.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-xl font-medium">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between bg-slate-50 p-4 md:p-6 rounded-3xl border border-slate-100 group transition-hover"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <img src={getImage(item.id)} className="w-10 h-10 object-contain" alt="" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800">{item.name}</h4>
                  <p className="text-slate-400 text-sm font-semibold">${item.price}</p>
                </div>
              </div>
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-6 py-2 rounded-xl text-pink-500 font-bold hover:bg-pink-50 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="pt-10 flex justify-between items-center px-4">
            <span className="text-slate-400 font-bold text-lg">Total:</span>
            <span className="text-4xl font-black text-slate-900">${totalPrice}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-8 bg-[#7C3AED] text-white py-5 rounded-[1.5rem] font-black text-xl hover:bg-[#6D28D9] transition-all shadow-xl hover:shadow-purple-200"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  )}
</section>



      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white border border-slate-100 rounded-3xl p-10 shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105"
            >
            
              <div className="absolute top-5 right-5 w-8 h-8">
                <img src="1.png" alt="play" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white mt-[-2px]">
                  {step.id}
                </span>
              </div>

               
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
                <img 
                  src={step.mainIcon} 
                  alt={step.title} 
                  className="w-12 h-12 object-contain"
                />
              </div>

              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-24 px-6 md:px-20 bg-gray-50/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
        
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-1">Starter</h3>
            <p className="text-slate-500 text-sm mb-6">Perfect for getting started</p>
            <div className="mb-8">
              <span className="text-4xl font-black">$0</span>
              <span className="text-slate-400 text-sm">/Month</span>
            </div>
            <ul className="flex-1 space-y-4 mb-10 text-left">
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Access to 10 free tools</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Basic templates</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Community support</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> 1 project per month</li>
            </ul>
            <button className="w-full py-4 rounded-2xl font-bold bg-[#7C3AED] text-white hover:opacity-90 transition">
              Get Started Free
            </button>
          </div>

          
          <div className="relative bg-[#7C3AED] p-8 rounded-3xl text-white shadow-2xl scale-105 z-10 flex flex-col">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#B45309] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-amber-200">
              Most Popular
            </span>
            <h3 className="text-2xl font-bold mb-1">Pro</h3>
            <p className="text-purple-100 text-sm mb-6">Best for professionals</p>
            <div className="mb-8">
              <span className="text-4xl font-black">$29</span>
              <span className="text-purple-200 text-sm">/Month</span>
            </div>
            <ul className="flex-1 space-y-4 mb-10 text-left">
              <li className="flex items-center gap-3 text-sm text-white"><span>✔</span> Access to all premium tools</li>
              <li className="flex items-center gap-3 text-sm text-white"><span>✔</span> Unlimited templates</li>
              <li className="flex items-center gap-3 text-sm text-white"><span>✔</span> Priority support</li>
              <li className="flex items-center gap-3 text-sm text-white"><span>✔</span> Unlimited projects</li>
              <li className="flex items-center gap-3 text-sm text-white"><span>✔</span> Cloud sync</li>
              <li className="flex items-center gap-3 text-sm text-white"><span>✔</span> Advanced analytics</li>
            </ul>
            <button className="w-full py-4 rounded-2xl font-bold bg-white text-[#7C3AED] hover:bg-slate-50 transition">
              Start Pro Trial
            </button>
          </div>

        
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-1">Enterprise</h3>
            <p className="text-slate-500 text-sm mb-6">For teams and businesses</p>
            <div className="mb-8">
              <span className="text-4xl font-black">$99</span>
              <span className="text-slate-400 text-sm">/Month</span>
            </div>
            <ul className="flex-1 space-y-4 mb-10 text-left">
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Everything in Pro</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Team collaboration</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Custom integrations</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Dedicated support</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> SLA guarantee</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><span className="text-green-500">✔</span> Custom branding</li>
            </ul>
            <button className="w-full py-4 rounded-2xl font-bold bg-[#7C3AED] text-white hover:opacity-90 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </section>


      <section className="bg-linear-to-br from-[#8B5CF6] to-[#7C3AED] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-1xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Ready To Transform Your Workflow?
          </h2>
          
          <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br className="hidden md:block" /> Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button className="bg-white text-[#7C3AED] font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all cursor-pointer">
              Explore Products
            </button>
            <button className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all cursor-pointer">
              View Pricing
            </button>
          </div>

          <div className="text-white/60 text-xs md:text-sm flex flex-wrap justify-center gap-0">
            <span>14-day free trial</span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card required</span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

<footer className="bg-[#0a0f1a] text-white py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
      
      
      <div className="lg:col-span-2">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">DigiTools</h2>
        <p className="text-slate-400 max-w-xs leading-relaxed text-sm">
          Premium digital tools for creators, professionals, and businesses. 
          Work smarter with our suite of powerful tools.
        </p>
      </div>

      
      {footerSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-md font-medium mb-6 text-white">{section.title}</h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      
      <div>
        <h3 className="text-md font-medium mb-6 text-white">Social Links</h3>
        <div className="flex gap-3">
          
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/assets/instagram.png" alt="Instagram" className="w-8 h-8" />
          </a>
          
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/assets/facebook.png" alt="Facebook" className="w-8 h-8" />
          </a>
          
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/assets/twitter.png" alt="X" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>

    
    <div className="border-t border-slate-800 w-full mb-8"></div>

  
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate-500 font-light">
      <p>© 2026 Digitools. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </div>
</footer>

<ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

    </div>
  );
};

export default App;