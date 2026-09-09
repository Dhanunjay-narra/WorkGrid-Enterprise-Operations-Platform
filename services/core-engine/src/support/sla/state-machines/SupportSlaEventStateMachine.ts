export type SupportSlaEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaEventStateMachine {
  private allowedTransitions: Record<SupportSlaEventState, SupportSlaEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaEventState, to: SupportSlaEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaEventState, to: SupportSlaEventState): SupportSlaEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaEvent: " + from + " -> " + to);
    }
    return to;
  }
}
