export type SupportSlaConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaConfigStateMachine {
  private allowedTransitions: Record<SupportSlaConfigState, SupportSlaConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaConfigState, to: SupportSlaConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaConfigState, to: SupportSlaConfigState): SupportSlaConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaConfig: " + from + " -> " + to);
    }
    return to;
  }
}
