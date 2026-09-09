export type CrmHealthConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthConfigStateMachine {
  private allowedTransitions: Record<CrmHealthConfigState, CrmHealthConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthConfigState, to: CrmHealthConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthConfigState, to: CrmHealthConfigState): CrmHealthConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthConfig: " + from + " -> " + to);
    }
    return to;
  }
}
