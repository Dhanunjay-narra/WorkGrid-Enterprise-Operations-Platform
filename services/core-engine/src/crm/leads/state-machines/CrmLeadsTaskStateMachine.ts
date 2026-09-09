export type CrmLeadsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsTaskStateMachine {
  private allowedTransitions: Record<CrmLeadsTaskState, CrmLeadsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsTaskState, to: CrmLeadsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsTaskState, to: CrmLeadsTaskState): CrmLeadsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsTask: " + from + " -> " + to);
    }
    return to;
  }
}
