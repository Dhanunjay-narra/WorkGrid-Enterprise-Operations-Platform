export type ProjectEpicsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsSummaryStateMachine {
  private allowedTransitions: Record<ProjectEpicsSummaryState, ProjectEpicsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsSummaryState, to: ProjectEpicsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsSummaryState, to: ProjectEpicsSummaryState): ProjectEpicsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
