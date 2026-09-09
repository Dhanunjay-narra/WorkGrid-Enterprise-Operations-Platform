export type CrmLeadsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsConfigStateMachine {
  private allowedTransitions: Record<CrmLeadsConfigState, CrmLeadsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsConfigState, to: CrmLeadsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsConfigState, to: CrmLeadsConfigState): CrmLeadsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
