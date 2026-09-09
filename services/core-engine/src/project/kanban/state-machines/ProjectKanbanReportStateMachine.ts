export type ProjectKanbanReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanReportStateMachine {
  private allowedTransitions: Record<ProjectKanbanReportState, ProjectKanbanReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanReportState, to: ProjectKanbanReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanReportState, to: ProjectKanbanReportState): ProjectKanbanReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanReport: " + from + " -> " + to);
    }
    return to;
  }
}
