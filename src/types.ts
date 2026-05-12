export type Sentiment = 'positive' | 'negative' | 'neutral' | 'volatile';

export interface Alert {
  id: string;
  type: 'danger' | 'warning' | 'info' | 'success';
  message: string;
  timestamp: string;
  category: 'market' | 'geopolitical' | 'social' | 'ai';
}

export interface MetricCard {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  sentiment: Sentiment;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
