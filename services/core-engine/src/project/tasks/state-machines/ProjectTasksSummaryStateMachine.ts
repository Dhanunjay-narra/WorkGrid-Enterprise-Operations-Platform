export type ProjectTasksSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksSummaryStateMachine {
  private allowedTransitions: Record<ProjectTasksSummaryState, ProjectTasksSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksSummaryState, to: ProjectTasksSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksSummaryState, to: ProjectTasksSummaryState): ProjectTasksSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksSummary: " + from + " -> " + to);
    }
    return to;
  }
}
