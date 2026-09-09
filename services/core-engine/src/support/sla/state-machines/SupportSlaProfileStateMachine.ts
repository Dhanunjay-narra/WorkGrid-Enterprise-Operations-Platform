export type SupportSlaProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaProfileStateMachine {
  private allowedTransitions: Record<SupportSlaProfileState, SupportSlaProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaProfileState, to: SupportSlaProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaProfileState, to: SupportSlaProfileState): SupportSlaProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaProfile: " + from + " -> " + to);
    }
    return to;
  }
}
