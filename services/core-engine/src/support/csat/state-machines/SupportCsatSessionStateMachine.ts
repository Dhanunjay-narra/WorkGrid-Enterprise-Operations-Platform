export type SupportCsatSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatSessionStateMachine {
  private allowedTransitions: Record<SupportCsatSessionState, SupportCsatSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatSessionState, to: SupportCsatSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatSessionState, to: SupportCsatSessionState): SupportCsatSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatSession: " + from + " -> " + to);
    }
    return to;
  }
}
