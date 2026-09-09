export type SupportSlaStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaStateStateMachine {
  private allowedTransitions: Record<SupportSlaStateState, SupportSlaStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaStateState, to: SupportSlaStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaStateState, to: SupportSlaStateState): SupportSlaStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaState: " + from + " -> " + to);
    }
    return to;
  }
}
