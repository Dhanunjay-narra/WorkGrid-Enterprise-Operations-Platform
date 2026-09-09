export type SupportCsatProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatProfileStateMachine {
  private allowedTransitions: Record<SupportCsatProfileState, SupportCsatProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatProfileState, to: SupportCsatProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatProfileState, to: SupportCsatProfileState): SupportCsatProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatProfile: " + from + " -> " + to);
    }
    return to;
  }
}
