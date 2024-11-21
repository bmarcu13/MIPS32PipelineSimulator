package Communication;

import Model.CPU;
import Model.Clock;
import Presentation.WebView;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.w3c.dom.Text;

import java.io.IOException;

public class WebSocketHandler extends TextWebSocketHandler {

    private Clock clock = new Clock(1500);
    private WebView webView = new WebView();
    private CPU cpu;
    private WebSocketSession session;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.printf("Client %s: %s%n", session.getRemoteAddress(), message.getPayload());
//        session.sendMessage(message);

        JsonObject json = JsonParser.parseString(message.getPayload()).getAsJsonObject();
        String command = json.get("command").getAsString();

        switch(command){
            case "tick":
                clock.tick();
                break;
            case "start_auto":
                clock.startAutoTick();
                break;
            case "stop_auto":
                clock.stopAutoTick();
                break;
            case "reset":
                cpu.reset();
                sendMessage(webView.collect());
                break;
            default:
                break;
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        if(this.session == null) {
            this.session = session;
            cpu = new CPU(clock, webView);
            clock.addSynchronousTask(() -> {
                sendMessage(webView.collect());
            });
            sendMessage(webView.collect());
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        this.session = null;
    }

    private void sendMessage(String payload) {
        try{
            session.sendMessage(new TextMessage(payload));
        }
        catch (Exception e) {
            System.out.println();
        }
    }
}
