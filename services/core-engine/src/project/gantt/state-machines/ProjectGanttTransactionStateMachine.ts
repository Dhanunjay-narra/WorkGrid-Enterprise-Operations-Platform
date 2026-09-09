export type ProjectGanttTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttTransactionStateMachine {
  private allowedTransitions: Record<ProjectGanttTransactionState, ProjectGanttTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttTransactionState, to: ProjectGanttTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttTransactionState, to: ProjectGanttTransactionState): ProjectGanttTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
