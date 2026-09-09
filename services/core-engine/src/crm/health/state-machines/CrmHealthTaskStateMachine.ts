export type CrmHealthTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthTaskStateMachine {
  private allowedTransitions: Record<CrmHealthTaskState, CrmHealthTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthTaskState, to: CrmHealthTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthTaskState, to: CrmHealthTaskState): CrmHealthTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthTask: " + from + " -> " + to);
    }
    return to;
  }
}
