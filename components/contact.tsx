"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white gradient-text">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-500/20 to-pink-500/20 backdrop-blur-md border border-gray-800 shadow-lg shadow-pink-500/10">
              <CardContent className="pt-6">
                <div className="space-y-5 text-black">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-black-300 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-sky-400 to-pink-500" />
                    <span className="text-black-300">
                      sumantpolai@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-black-300 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-sky-400 to-pink-500" />
                    <span className="text-black-300">+91 63700 06029</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-black-300 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-sky-400 to-pink-500" />
                    <span className="text-black-300">BHB Colony, Bhubaneswar</span>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://linkedin.com"
                      className="p-2 rounded-lg border border-gray-700 hover:bg-gradient-to-r from-sky-400 to-pink-500 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://github.com"
                      className="p-2 rounded-lg border border-gray-700 hover:bg-gradient-to-r from-sky-400 to-pink-500 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-500/20 to-pink-500/20 backdrop-blur-md border border-gray-800 shadow-lg shadow-pink-500/10">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Name"
                      className="bg-black/20 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-black/20 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      rows={4}
                      className="bg-black/20 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500  hover:opacity-90 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

