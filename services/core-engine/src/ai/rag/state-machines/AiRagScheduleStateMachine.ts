export type AiRagScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagScheduleStateMachine {
  private allowedTransitions: Record<AiRagScheduleState, AiRagScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagScheduleState, to: AiRagScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagScheduleState, to: AiRagScheduleState): AiRagScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
