export type SupportSlaItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaItemStateMachine {
  private allowedTransitions: Record<SupportSlaItemState, SupportSlaItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaItemState, to: SupportSlaItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaItemState, to: SupportSlaItemState): SupportSlaItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaItem: " + from + " -> " + to);
    }
    return to;
  }
}
