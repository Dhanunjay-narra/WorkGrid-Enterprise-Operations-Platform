export type CrmDealsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsTaskStateMachine {
  private allowedTransitions: Record<CrmDealsTaskState, CrmDealsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsTaskState, to: CrmDealsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsTaskState, to: CrmDealsTaskState): CrmDealsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsTask: " + from + " -> " + to);
    }
    return to;
  }
}
