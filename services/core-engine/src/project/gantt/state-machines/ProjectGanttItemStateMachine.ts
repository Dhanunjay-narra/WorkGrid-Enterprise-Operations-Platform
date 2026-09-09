export type ProjectGanttItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttItemStateMachine {
  private allowedTransitions: Record<ProjectGanttItemState, ProjectGanttItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttItemState, to: ProjectGanttItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttItemState, to: ProjectGanttItemState): ProjectGanttItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttItem: " + from + " -> " + to);
    }
    return to;
  }
}
