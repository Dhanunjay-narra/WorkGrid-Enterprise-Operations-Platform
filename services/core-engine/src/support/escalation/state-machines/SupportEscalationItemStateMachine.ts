export type SupportEscalationItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationItemStateMachine {
  private allowedTransitions: Record<SupportEscalationItemState, SupportEscalationItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationItemState, to: SupportEscalationItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationItemState, to: SupportEscalationItemState): SupportEscalationItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationItem: " + from + " -> " + to);
    }
    return to;
  }
}
