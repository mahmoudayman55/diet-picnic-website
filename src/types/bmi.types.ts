export type Gender = 'male' | 'female';

export interface BmiResult {
  name: string;
  weight: number;
  height: number;
  gender: Gender;
  bmi: string;
  idealWeight: string;
  category: string;
  percentage: number;
  date: string;
}

export type ActiveTab = 'home' | 'bmi-calculator' | 'health-tips' | 'about';

export interface HealthTip {
  title: string;
  category: string;
  description: string;
  icon: string;
}
