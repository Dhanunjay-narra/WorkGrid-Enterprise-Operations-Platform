export interface SprintHistoryRecord {
  sprintId: string;
  committedStoryPoints: number;
  completedStoryPoints: number;
  spilloverStoryPoints: number;
}

export class SprintVelocityEngine {
  public calculateAverageVelocity(history: SprintHistoryRecord[]): { averageVelocity: number; completionRatePercent: number } {
    if (history.length === 0) return { averageVelocity: 0, completionRatePercent: 0 };

    const totalCompleted = history.reduce((sum, s) => sum + s.completedStoryPoints, 0);
    const totalCommitted = history.reduce((sum, s) => sum + s.committedStoryPoints, 0);

    const averageVelocity = Math.round(totalCompleted / history.length);
    const completionRatePercent = totalCommitted > 0 ? Math.round((totalCompleted / totalCommitted) * 100) : 0;

    return { averageVelocity, completionRatePercent };
  }

  public forecastSprintsRequired(backlogPoints: number, averageVelocity: number): number {
    if (averageVelocity <= 0) return Infinity;
    return Math.ceil(backlogPoints / averageVelocity);
  }
}
