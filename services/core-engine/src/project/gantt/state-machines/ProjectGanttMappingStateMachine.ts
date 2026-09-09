export type ProjectGanttMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttMappingStateMachine {
  private allowedTransitions: Record<ProjectGanttMappingState, ProjectGanttMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttMappingState, to: ProjectGanttMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttMappingState, to: ProjectGanttMappingState): ProjectGanttMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttMapping: " + from + " -> " + to);
    }
    return to;
  }
}
