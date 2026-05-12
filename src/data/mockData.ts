import { Alert, MetricCard, Sentiment } from '../types';

export const generateMockMetrics = (): MetricCard[] => [
  { label: 'Global Sentiment', value: '68.4', change: 2.1, trend: 'up', sentiment: 'positive' },
  { label: 'Fear Index', value: '42', change: -5.4, trend: 'down', sentiment: 'neutral' },
  { label: 'Market Mood', value: 'Bullish', change: 1.2, trend: 'up', sentiment: 'positive' },
  { label: 'Geopolitical Tension', value: 'High', change: 8.7, trend: 'up', sentiment: 'negative' },
];

export const generateMockAlerts = (): Alert[] => [
  {
    id: '1',
    type: 'warning',
    message: 'Negative sentiment rising in AI stocks after regulatory rumors.',
    timestamp: new Date().toISOString(),
    category: 'market',
  },
  {
    id: '2',
    type: 'danger',
    message: 'Tension increasing in Eastern Europe; escalation tracker triggered.',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    category: 'geopolitical',
  },
  {
    id: '3',
    type: 'info',
    message: 'Social media outrage spike detected regarding new privacy policies.',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    category: 'social',
  },
];

export const MOCK_CHART_DATA = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  sentiment: 50 + Math.random() * 40 - 20,
  volume: Math.floor(Math.random() * 1000),
}));

export const EMOTION_DATA = [
  { name: 'Stress', value: 35, color: '#ef4444' },
  { name: 'Anxiety', value: 25, color: '#f97316' },
  { name: 'Happiness', value: 20, color: '#22c55e' },
  { name: 'Boredom', value: 10, color: '#6366f1' },
  { name: 'Excitement', value: 10, color: '#a855f7' },
];
