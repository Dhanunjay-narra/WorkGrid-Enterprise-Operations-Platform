export type SupportCsatConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatConfigStateMachine {
  private allowedTransitions: Record<SupportCsatConfigState, SupportCsatConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatConfigState, to: SupportCsatConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatConfigState, to: SupportCsatConfigState): SupportCsatConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatConfig: " + from + " -> " + to);
    }
    return to;
  }
}
