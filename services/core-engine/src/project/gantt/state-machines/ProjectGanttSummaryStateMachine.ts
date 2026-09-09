export type ProjectGanttSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttSummaryStateMachine {
  private allowedTransitions: Record<ProjectGanttSummaryState, ProjectGanttSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttSummaryState, to: ProjectGanttSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttSummaryState, to: ProjectGanttSummaryState): ProjectGanttSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttSummary: " + from + " -> " + to);
    }
    return to;
  }
}
