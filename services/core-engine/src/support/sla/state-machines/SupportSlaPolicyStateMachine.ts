export type SupportSlaPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaPolicyStateMachine {
  private allowedTransitions: Record<SupportSlaPolicyState, SupportSlaPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaPolicyState, to: SupportSlaPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaPolicyState, to: SupportSlaPolicyState): SupportSlaPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
