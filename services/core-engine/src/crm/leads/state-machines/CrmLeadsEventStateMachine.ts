export type CrmLeadsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsEventStateMachine {
  private allowedTransitions: Record<CrmLeadsEventState, CrmLeadsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsEventState, to: CrmLeadsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsEventState, to: CrmLeadsEventState): CrmLeadsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
