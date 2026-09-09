export type AiEvaluationsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsScheduleStateMachine {
  private allowedTransitions: Record<AiEvaluationsScheduleState, AiEvaluationsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsScheduleState, to: AiEvaluationsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsScheduleState, to: AiEvaluationsScheduleState): AiEvaluationsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
