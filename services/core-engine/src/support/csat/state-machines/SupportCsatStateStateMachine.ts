export type SupportCsatStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatStateStateMachine {
  private allowedTransitions: Record<SupportCsatStateState, SupportCsatStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatStateState, to: SupportCsatStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatStateState, to: SupportCsatStateState): SupportCsatStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatState: " + from + " -> " + to);
    }
    return to;
  }
}
