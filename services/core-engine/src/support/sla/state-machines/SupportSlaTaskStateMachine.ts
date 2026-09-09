export type SupportSlaTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaTaskStateMachine {
  private allowedTransitions: Record<SupportSlaTaskState, SupportSlaTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaTaskState, to: SupportSlaTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaTaskState, to: SupportSlaTaskState): SupportSlaTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaTask: " + from + " -> " + to);
    }
    return to;
  }
}
