export type SupportSlaSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaSummaryStateMachine {
  private allowedTransitions: Record<SupportSlaSummaryState, SupportSlaSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaSummaryState, to: SupportSlaSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaSummaryState, to: SupportSlaSummaryState): SupportSlaSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaSummary: " + from + " -> " + to);
    }
    return to;
  }
}
