import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="w-full py-8 border-t border-muted relative z-10 backdrop-blur-md bg-white/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-brand-purple mb-2">S.Adk</div>
              <p className="text-muted-foreground text-sm max-w-md">
                Building innovative digital solutions with a focus on clean, efficient code and exceptional user experiences.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-foreground font-medium mb-3">Connect with me</p>
              <div className="flex space-x-4">
              
              </div>
            </div>
          </div>
          <div className="text-muted-foreground text-sm text-center mt-8">
            © {new Date().getFullYear()} Sarthak Adk . All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
