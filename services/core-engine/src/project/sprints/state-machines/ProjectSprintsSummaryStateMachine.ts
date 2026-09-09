export type ProjectSprintsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsSummaryStateMachine {
  private allowedTransitions: Record<ProjectSprintsSummaryState, ProjectSprintsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsSummaryState, to: ProjectSprintsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsSummaryState, to: ProjectSprintsSummaryState): ProjectSprintsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
