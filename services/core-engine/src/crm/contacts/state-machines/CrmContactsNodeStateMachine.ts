export type CrmContactsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsNodeStateMachine {
  private allowedTransitions: Record<CrmContactsNodeState, CrmContactsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsNodeState, to: CrmContactsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsNodeState, to: CrmContactsNodeState): CrmContactsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsNode: " + from + " -> " + to);
    }
    return to;
  }
}
