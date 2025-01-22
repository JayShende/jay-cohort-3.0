export const createWebSocket = (url: string): WebSocket => {
    const ws = new WebSocket(url);
  
    ws.onopen = () => {
      console.log('WebSocket connection established');
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
  
    return ws;
  };
  