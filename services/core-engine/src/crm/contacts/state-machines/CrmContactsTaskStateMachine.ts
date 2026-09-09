export type CrmContactsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsTaskStateMachine {
  private allowedTransitions: Record<CrmContactsTaskState, CrmContactsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsTaskState, to: CrmContactsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsTaskState, to: CrmContactsTaskState): CrmContactsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsTask: " + from + " -> " + to);
    }
    return to;
  }
}
