import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useFeedBack } from "@/hooks/query-feedback/useFeeBack";
import useToastMessage from "@/hooks/userToastMessgases";

import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const mutation = useFeedBack();
  const { toastLoading } = useToastMessage();

  function handleFeedBack() {
    toastLoading("Vui lòng đợi");
    mutation.mutate({ name, email, phone_number: phoneNumber, message });
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Phần Form Liên hệ */}
        <div className="flex flex-col w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Liên hệ với chúng tôi
          </h1>
          <Separator className="mb-4" />
          <h2 className="text-xl font-medium text-gray-700 mb-2">
            Gửi thắc mắc cho chúng tôi
          </h2>
          <Separator className="mb-4" />

          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tên của bạn"
            className="mb-4"
          />

          <div className="flex gap-4 mb-4">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1"
            />
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Số điện thoại"
              className="flex-1"
            />
          </div>

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nội dung thắc mắc"
            className="mb-4"
          />

          <Button
            type="button"
            onClick={handleFeedBack}
            className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            Gửi
          </Button>
        </div>

        {/* Phần Google Map */}
        <div className="w-full md:w-1/2">
          <div className="h-full bg-gray-200 rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3056025958657!2d105.7202567!3d10.0079518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08903d92d1d0d%3A0x2c147a40ead97caa!2zVHJườngIu4gTGFpZCBoiW5nIFNhbQ!5e0!3m2!1svi!2s!4v1628086763285!5m2!1svi!2s"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
